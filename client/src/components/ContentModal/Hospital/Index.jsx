import React from 'react';
import { Tabs, Tab } from '@heroui/react';
import {
  CalendarDateRangeIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';
import MedicalAppointments from './MedicalAppointments.jsx';
import Patient from './Patient.jsx';
import HealthRecord from './HealthRecord.jsx';
import Pills from './Pills.jsx';
import Consult from './Consult.jsx';

// Tabs content
export default function ContentHospital() {
  const [selected, setSelected] = React.useState('medicalappointments');

  return (
    <Tabs
      aria-label='Options'
      selectedKey={selected}
      onSelectionChange={setSelected}
      size='lg'
      color='primary'
      fullWidth
    >
      <Tab
        key='medicalappointments'
        title={
          <div className='flex items-center space-x-2'>
            <CalendarDateRangeIcon className='size-6' />
            <span>Medical Appointments</span>
          </div>
        }
      >
        <MedicalAppointments />
      </Tab>
      <Tab
        key='healthrecord'
        title={
          <div className='flex items-center space-x-2'>
            <ClockIcon className='size-6' />
            <span>Health Record</span>
          </div>
        }
      >
        <HealthRecord />
      </Tab>
      <Tab
        key='consult'
        title={
          <div className='flex items-center space-x-2'>
            <ClipboardDocumentListIcon className='size-6' />
            <span>Consult</span>
          </div>
        }
      >
        <Consult />
      </Tab>
      <Tab
        key='patient'
        title={
          <div className='flex items-center space-x-2'>
            <UserIcon className='size-6' />
            <span>Patient</span>
          </div>
        }
      >
        <Patient />
      </Tab>
      <Tab
        key='Pills'
        title={
          <div className='flex items-center space-x-2'>
            <ClipboardDocumentCheckIcon className='size-6' />
            <span>Pills Receted</span>
          </div>
        }
      >
        <Pills />
      </Tab>
    </Tabs>
  );
}
