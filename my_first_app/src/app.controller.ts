
import { Controller,Post,Delete,Put,Get } from "@nestjs/common";


@Controller('book')
export class BookController{
    // add books
    @Post('/add')
    addBook():string{
        return "This will add book";
    }

    // delete book
    @Delete('/delete_book')
    deleteBook():string{
        return "This will delete book";
    }

    // updatebook
    @Put('/update_book')
    updateBook():string{
        return "This will update book";
    }

    // show book
    @Get('/find_book')
    findBook():string{
        return "This will find book";
    }
}