import { Test, TestingModule } from '@nestjs/testing';
import { UnionMemberOutsandingController } from './union-member-outsanding.controller';
import { UnionMemberOutsandingService } from './union-member-outsanding.service';

describe('UnionMemberOutsandingController', () => {
  let controller: UnionMemberOutsandingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnionMemberOutsandingController],
      providers: [UnionMemberOutsandingService],
    }).compile();

    controller = module.get<UnionMemberOutsandingController>(UnionMemberOutsandingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
