import { Grid, Typography } from '@mui/material'
import React from 'react'
import { icons } from '../../utils/icons'
import Calendar from '../Calendar'
import { strings } from '../../utils/string'




function EventSection() {
  return (
        <Grid container sx={{
            margin: 10,
        }}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant='h5' color=''>{strings.EVENTCALENDAR}</Typography>
                <Calendar/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant='h5' color=''>EVENT QUICK VIEW</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant='h5' color=''>TRANSLATOR</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant='h5' color=''>SUNSMART</Typography>

                <img style={{
                    width: '200px',
                }} src={icons().sunSmart} alt=''/>
            </Grid>
        </Grid>
  )}

export default EventSection