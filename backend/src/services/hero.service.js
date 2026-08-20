// backend/src/services/hero.service.js
import prisma from '../config/prisma.js';

// Helper function to clean image data
const cleanImage = (image) => {
    if (!image) return null;
    if (typeof image === 'string') return image;
    if (typeof image === 'object') {
        if (Object.keys(image).length === 0) return null;
        return image.url || image.path || image.src || null;
    }
    return null;
};

// Helper function to convert to boolean
const toBoolean = (value) => {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
        return value.toLowerCase() === 'true' || value === '1';
    }
    if (typeof value === 'number') {
        return value === 1;
    }
    return false;
};

// Helper function to clean hero data
const cleanHeroData = (data) => {
    return {
        title: data.title,
        subtitle: data.subtitle || null,
        description: data.description || null,
        buttonText: data.buttonText || null,
        buttonLink: data.buttonLink || null,
        image: cleanImage(data.image),
        isActive: toBoolean(data.isActive) // ✅ Convert to boolean
    };
};

export const getActiveHero = async () => {
    try {
        return await prisma.hero.findFirst({
            where: { isActive: true }
        });
    } catch (error) {
        console.error('Get active hero error:', error);
        throw error;
    }
};

export const getAllHeroes = async () => {
    try {
        return await prisma.hero.findMany({
            orderBy: { createdAt: 'desc' }
        });
    } catch (error) {
        console.error('Get all heroes error:', error);
        throw error;
    }
};

export const getHeroById = async (id) => {
    try {
        return await prisma.hero.findUnique({
            where: { id: parseInt(id) }
        });
    } catch (error) {
        console.error('Get hero by id error:', error);
        throw error;
    }
};

export const createHero = async (data) => {
    try {
        const cleanData = cleanHeroData(data);
        
        console.log('Creating hero with data:', cleanData);
        
        return await prisma.hero.create({
            data: cleanData
        });
    } catch (error) {
        console.error('Create hero service error:', error);
        throw error;
    }
};

export const updateHero = async (id, data) => {
    try {
        const cleanData = cleanHeroData(data);
        
        // Remove undefined values
        Object.keys(cleanData).forEach(key => {
            if (cleanData[key] === undefined) {
                delete cleanData[key];
            }
        });
        
        console.log('Updating hero with data:', cleanData);
        
        return await prisma.hero.update({
            where: { id: parseInt(id) },
            data: cleanData
        });
    } catch (error) {
        console.error('Update hero service error:', error);
        throw error;
    }
};

export const toggleHeroStatus = async (id) => {
    try {
        const hero = await prisma.hero.findUnique({
            where: { id: parseInt(id) }
        });
        
        if (!hero) {
            throw new Error('Hero not found');
        }
        
        return await prisma.hero.update({
            where: { id: parseInt(id) },
            data: { isActive: !hero.isActive }
        });
    } catch (error) {
        console.error('Toggle hero status error:', error);
        throw error;
    }
};

export const deleteHero = async (id) => {
    try {
        return await prisma.hero.delete({
            where: { id: parseInt(id) }
        });
    } catch (error) {
        console.error('Delete hero error:', error);
        throw error;
    }
};