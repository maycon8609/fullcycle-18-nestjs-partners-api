import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ReserveSpotDto } from './dto/reserve-spot.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':eventId')
  findOne(@Param('eventId') eventId: string) {
    return this.eventsService.findOne(eventId);
  }

  @Patch(':eventId')
  update(
    @Param('eventId') eventId: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.update(eventId, updateEventDto);
  }

  @HttpCode(204)
  @Delete(':eventId')
  remove(@Param('eventId') eventId: string) {
    return this.eventsService.remove(eventId);
  }

  @Post(':eventId/reserve')
  reserveSpots(@Body() dto: ReserveSpotDto, @Param('eventId') eventId: string) {
    return this.eventsService.reserveSpot(dto, eventId);
  }
}
