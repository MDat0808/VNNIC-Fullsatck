import { Test, TestingModule } from '@nestjs/testing';
import { TypicalActivitiesService } from './typical-activities.service';

describe('TypicalActivitiesService', () => {
  let service: TypicalActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypicalActivitiesService],
    }).compile();

    service = module.get<TypicalActivitiesService>(TypicalActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
