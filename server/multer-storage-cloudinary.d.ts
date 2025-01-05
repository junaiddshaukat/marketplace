import { CloudinaryStorage } from 'multer-storage-cloudinary';

declare module 'multer-storage-cloudinary' {
    import { StorageEngine } from 'multer';
  
    interface CloudinaryStorageOptions {
      cloudinary: any;
      params?: any;
    }
  
    export class CloudinaryStorage implements StorageEngine {
      constructor(options: CloudinaryStorageOptions);
    }
  }
  