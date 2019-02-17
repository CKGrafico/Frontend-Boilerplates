import { Request, Response } from 'express';
import { compilerService } from './compiler.service';

export class CompilerController {
    constructor(req: Request, res: Response) {
        res.send(compilerService.process());
    }

}
