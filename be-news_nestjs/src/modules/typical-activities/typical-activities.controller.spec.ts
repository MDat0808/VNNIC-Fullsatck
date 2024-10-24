import { Test, TestingModule } from '@nestjs/testing';
import { TypicalActivitiesController } from './typical-activities.controller';
import { TypicalActivitiesService } from './typical-activities.service';

describe('TypicalActivitiesController', () => {
  let controller: TypicalActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypicalActivitiesController],
      providers: [TypicalActivitiesService],
    }).compile();

    controller = module.get<TypicalActivitiesController>(TypicalActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
