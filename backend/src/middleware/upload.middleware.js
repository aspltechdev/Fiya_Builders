import multer from "multer";
import path from "path";
import fs from "fs";

/*
|--------------------------------------------------------------------------
| Base Upload Directory
|--------------------------------------------------------------------------
*/

const baseUploadDir = path.join(
  process.cwd(),
  "uploads"
);

/*
|--------------------------------------------------------------------------
| Allowed Image Types
|--------------------------------------------------------------------------
*/

const allowedMimeTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
];

/*
|--------------------------------------------------------------------------
| Create Folder
|--------------------------------------------------------------------------
*/

const createFolder = (folderName) => {
  const folderPath = path.join(
    baseUploadDir,
    folderName
  );

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, {
      recursive: true,
    });
  }

  return folderPath;
};

/*
|--------------------------------------------------------------------------
| Storage
|--------------------------------------------------------------------------
*/

const createStorage = (folderName) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const folderPath =
        createFolder(folderName);

      cb(null, folderPath);
    },

    filename: (req, file, cb) => {
      const extension =
        path.extname(
          file.originalname
        ).toLowerCase();

      const originalName =
        path
          .basename(
            file.originalname,
            extension
          )
          .replace(
            /[^a-zA-Z0-9-_]/g,
            "-"
          )
          .toLowerCase();

      const uniqueName =
        `${originalName}-${Date.now()}${extension}`;

      cb(null, uniqueName);
    },
  });
};

/*
|--------------------------------------------------------------------------
| File Filter
|--------------------------------------------------------------------------
*/

const fileFilter = (
  req,
  file,
  cb
) => {
  if (
    allowedMimeTypes.includes(
      file.mimetype
    )
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only image files are allowed"
      ),
      false
    );
  }
};

/*
|--------------------------------------------------------------------------
| Create Upload Middleware
|--------------------------------------------------------------------------
*/

const createUpload = (
  folderName,
  options = {}
) => {
  const upload = multer({
    storage:
      createStorage(folderName),

    fileFilter,

    limits: {
      fileSize:
        options.maxSize ||
        5 * 1024 * 1024,
    },
  });

  return upload;
};

/*
|--------------------------------------------------------------------------
| Single Image
|--------------------------------------------------------------------------
*/

export const uploadSingle = (
  folderName,
  fieldName
) => {
  return createUpload(
    folderName
  ).single(fieldName);
};

/*
|--------------------------------------------------------------------------
| Multiple Images
|--------------------------------------------------------------------------
*/

export const uploadMultiple = (
  folderName,
  fieldName,
  maxCount = 20
) => {
  return createUpload(
    folderName
  ).array(
    fieldName,
    maxCount
  );
};

/*
|--------------------------------------------------------------------------
| Multiple Fields
|--------------------------------------------------------------------------
*/

export const uploadFields = (
  folderName,
  fields
) => {
  return createUpload(
    folderName
  ).fields(fields);
};