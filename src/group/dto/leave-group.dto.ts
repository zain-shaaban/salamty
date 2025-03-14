import { IsNotEmpty, IsNumber } from 'class-validator';

export class LeaveGroupDto {
  @IsNumber()
  @IsNotEmpty()
  groupID: number;
}
