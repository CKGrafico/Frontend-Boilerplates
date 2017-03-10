import * as express from 'express';
import {json} from 'body-parser';
import {Express, Request, Response} from 'express';
import {CompilerController} from './compiler';

const PORT = 8080;

export class Server {
    private app: Express;

    constructor() {
        this.app = express();
        this.app.use(json());

        this.configRouter();

        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }

    private configRouter(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.sendfile('./dist/client/index.html');
        });

        this.app.get('/compiler', (req: Request, res: Response) => new CompilerController(req, res));
    }

}
new Server();
