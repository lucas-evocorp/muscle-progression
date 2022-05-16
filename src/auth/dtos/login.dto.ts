import { IsEmail, MaxLength } from 'class-validator';
import { IsNotBlank } from 'src/core/decorators/is-not-blank';
import { messagesValidation as Msgs } from 'src/core/messages/messages-validation-response';
export class LoginDto {
  @IsEmail()
  @IsNotBlank({ message: Msgs.isNotBlank('email') })
  email: string;

  @MaxLength(50, { message: Msgs.maxLength('senha', 50) })
  @IsNotBlank({ message: Msgs.isNotBlank('senha') })
  password: string;
}
