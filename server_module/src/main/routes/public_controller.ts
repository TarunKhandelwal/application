import {Router, Request, Response} from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log('Got Request For Welcome');
    res.send('Hello World');
    res.end();
});

router.get('/:name', (req: Request, res: Response) => {
    let params = req.params;
    res.send('Hello,'+ params.name);
    res.end();
});

export var controller: Router = router;