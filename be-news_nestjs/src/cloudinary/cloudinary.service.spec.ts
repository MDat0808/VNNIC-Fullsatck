import { Test, TestingModule } from '@nestjs/testing';
import {
  CloudinaryBannerAdsService,
  CloudinaryThumbNailService,
  CloudinaryUnionMemberAdsService,
} from './cloudinary.service';

describe('CloudinaryService', () => {
  let service: CloudinaryThumbNailService;
  let bannerAdsService: CloudinaryBannerAdsService;
  let unionmemberService: CloudinaryUnionMemberAdsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CloudinaryThumbNailService,
        CloudinaryBannerAdsService,
        CloudinaryUnionMemberAdsService,
      ],
    }).compile();

    service = module.get<CloudinaryThumbNailService>(
      CloudinaryThumbNailService,
    );
    bannerAdsService = module.get<CloudinaryBannerAdsService>(
      CloudinaryBannerAdsService,
    );

    unionmemberService = module.get<CloudinaryUnionMemberAdsService>(
      CloudinaryUnionMemberAdsService,
    );
  });

  it('CloudinaryThumbNailService should be defined', () => {
    expect(service).toBeDefined();
  });

  it('CloudinaryBannerAdsService should be defined', () => {
    expect(bannerAdsService).toBeDefined();
  });

  it('CloudinaryUnionMemberService should be defined', () => {
    expect(unionmemberService).toBeDefined();
  });
});
