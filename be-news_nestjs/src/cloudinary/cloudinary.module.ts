import { Module } from '@nestjs/common';
import {
  CloudinaryThumbNailService,
  CloudinaryBannerAdsService,
  CloudinaryUnionMemberAdsService,
} from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary/cloudinary';
@Module({
  providers: [
    CloudinaryThumbNailService,
    CloudinaryBannerAdsService,
    CloudinaryUnionMemberAdsService,
    CloudinaryProvider,
  ],
  exports: [
    CloudinaryProvider,
    CloudinaryUnionMemberAdsService,
    CloudinaryThumbNailService,
    CloudinaryBannerAdsService,
  ],
})
export class CloudinaryModule {}
