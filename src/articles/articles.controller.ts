import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('Articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  async create(@Body() createArticleDto: CreateArticleDto) {
    return await this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ArticleEntity, isArray: true })
  async findAll() {
    return await this.articlesService.findAll();
  }

  @Get('drafts')
  @ApiCreatedResponse({ type: ArticleEntity, isArray: true })
  async findAllDrafts() {
    return await this.articlesService.findAllDrafts();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  async findOne(@Param('id') id: string) {
    return await this.articlesService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return await this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  async remove(@Param('id') id: string) {
    return await this.articlesService.remove(id);
  }
}
