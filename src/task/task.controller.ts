import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { createTaskDto } from './dto/createTask.dto';

@Controller('task')
export class TaskController {


    @Get()
    allTask() {

        return "all task here";
    }

    @Get(":id/:slug")
    getOneTask(@Param("id", ParseIntPipe) id, @Param("slug") slug: string) {

        console.log(typeof id);

        return `Task number ${id} with the slug ${slug}`;
    }

    // @Get(":id/:slug")
    // getOneTask(@Param() params) {
    //     // si on ne précise pas le nom du paramètre dans le décorateur, il renvoie tout les params 
    //     return params;
    // }


    @Post()
    @HttpCode(202)
    @UsePipes(new ValidationPipe({
        whitelist: true
    }))
    // on peut aussi mettre directement le new ValidationPipe dans le @Body

    createTask(@Body() body: createTaskDto) {
        // même chose que pour les params dans la spécification des noms 
        return body;

    }




}
