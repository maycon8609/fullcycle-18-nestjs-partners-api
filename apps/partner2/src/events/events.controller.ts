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
import { EventsCoreService } from '@app/core/events/events-core.service';
import { CreateEventRequest } from './request/create-event.request';
import { UpdateEventRequest } from './request/update-event.request';
import { ReserveSpotRequest } from './request/reserve-spot.request';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsCoreService: EventsCoreService) {}

  @Post()
  create(@Body() createEventRequest: CreateEventRequest) {
    return this.eventsCoreService.create(createEventRequest);
  }

  @Get()
  findAll() {
    return this.eventsCoreService.findAll();
  }

  @Get(':eventId')
  findOne(@Param('eventId') eventId: string) {
    return this.eventsCoreService.findOne(eventId);
  }

  @Patch(':eventId')
  update(
    @Param('eventId') eventId: string,
    @Body() updateEventRequest: UpdateEventRequest,
  ) {
    return this.eventsCoreService.update(eventId, updateEventRequest);
  }

  @HttpCode(204)
  @Delete(':eventId')
  remove(@Param('eventId') eventId: string) {
    return this.eventsCoreService.remove(eventId);
  }

  @Post(':eventId/reserve')
  reserveSpots(
    @Body() reserveSpotRequest: ReserveSpotRequest,
    @Param('eventId') eventId: string,
  ) {
    return this.eventsCoreService.reserveSpot(reserveSpotRequest, eventId);
  }
}
