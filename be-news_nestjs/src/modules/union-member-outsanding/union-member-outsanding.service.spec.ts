import { Test, TestingModule } from '@nestjs/testing';
import { UnionMemberOutsandingService } from './union-member-outsanding.service';

describe('UnionMemberOutsandingService', () => {
  let service: UnionMemberOutsandingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnionMemberOutsandingService],
    }).compile();

    service = module.get<UnionMemberOutsandingService>(UnionMemberOutsandingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
