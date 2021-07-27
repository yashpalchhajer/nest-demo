import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { Post as PostInterface} from './interfaces/post.interface';
import { ObjectId } from "mongoose";

@Controller('posts')
export class PostsController
{
    constructor(private readonly postService: PostsService){}

    @Post()
    async create(@Body() createPostDto: CreatePostDto){
        console.log(createPostDto.title);
        
        this.postService.create(createPostDto);
    }

    @Get()
    async findAll(): Promise<PostInterface[]>{
        return this.postService.findAll();
    }

}