import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary/cloudinary-response';
const streamifier = require('streamifier');

@Injectable()
export class CloudinaryThumbNailService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    if (file.size > 1000000) {
      throw new Error('Please upload a file size not more than 1M');
    }
    if (!file.mimetype.startsWith('image')) {
      throw new Error('Sorry, this file is not an image, please try again');
    }
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'thumbnail-new' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}

@Injectable()
export class CloudinaryBannerAdsService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    if (file.size > 1000000) {
      throw new Error('Please upload a file size not more than 1M');
    }
    if (!file.mimetype.startsWith('image')) {
      throw new Error('Sorry, this file is not an image, please try again');
    }
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'banner-ads' }, // Use a different folder for banner ads
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}

@Injectable()
export class CloudinaryUnionMemberAdsService {
  uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    if (file.size > 1000000) {
      throw new Error('Please upload a file size not more than 1M');
    }
    if (!file.mimetype.startsWith('image')) {
      throw new Error('Sorry, this file is not an image, please try again');
    }
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'union-member' }, // Use a different folder for banner ads
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }
}
