import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { CreateServicoDto } from './dto/create-servico.dto';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  create(@Body() createServicoDto: CreateServicoDto) {
    return this.servicoService.create(createServicoDto);
  }

  @Get()
  findAll() {
    return this.servicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateServicoDto: CreateServicoDto) {
    return this.servicoService.update(+id, updateServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicoService.remove(+id);
  }
}
