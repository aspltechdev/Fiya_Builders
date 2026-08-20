import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAdmin = async () => {
  const email = "admin@fiyabuilders.com";
  const password = "Admin@12345";

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const existingAdmin =
    await prisma.user.findUnique({
      where: {
        email,
      },
    });

  if (existingAdmin) {
    console.log(
      "Admin user already exists."
    );

    return;
  }

  const admin =
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

  console.log(
    "Admin created successfully:"
  );

  console.log({
    id: admin.id,
    email: admin.email,
    role: admin.role,
  });
};

createAdmin()
  .catch((error) => {
    console.error(
      "Seed Error:",
      error
    );

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });