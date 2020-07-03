import { Injectable } from '@angular/core';
import {
    NgCommandHandler,
    CommandHandler,
    CommandContext,
} from '@farris/devkit';
import { DictCommandService } from '../services/dict.command.service';
@Injectable()
@NgCommandHandler({
    commandName: 'cancle',
})
export class CancelHandler extends CommandHandler {
    constructor(private commandService: DictCommandService) {
        super();
    }
    schedule() {
        this.addTask('cancle', (context: CommandContext) => {
            const args = [];
            return this.invoke(this.commandService, 'cancle', args, context);
        });
    }
}
