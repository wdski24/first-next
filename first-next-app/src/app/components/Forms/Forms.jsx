//client side rendered code
'use client';
import { useState } from 'react';
import InputField from './InputField/InputField';
import { useRouter } from 'next/navigation';
import { createUser } from '@/app/actions';

function Forms() {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [reservationConfirmation, setReservationConfirmation] = useState(false);
  const router = useRouter();

  /**
   * Conditional Rendering mit Variablen und If-Else/Switch-Case Statement
   */
  let form = (
    <div>
      {/**
       * Two-Way Binding Input Component for Forms
       */}
      <InputField label='Name' value={name} changeFunction={setName} />
      <InputField
        label='FirstName'
        value={firstName}
        changeFunction={setFirstName}
      />
      <button onClick={() => router.push(`/checkout/${firstName}`)}>
        Reservieren
      </button>
    </div>
  );
  if (name === 'Lukas') {
    form = (
      <div>
        {/**
         * Two-Way Binding Input Component for Forms
         */}
        <InputField label='Name' value={name} changeFunction={setName} />
        <InputField
          label='FirstName'
          value={firstName}
          changeFunction={setFirstName}
        />
        <button onClick={() => createUser({ name: 'Max' })}>
          Stammkundenreservierung
        </button>
      </div>
    );
  }
  return (
    /**
     * Conditional Rendering in React inline mit ternary operator
     */
    <>{reservationConfirmation ? <h2>Reservieren erfolgreich</h2> : form}</>
  );
}

export default Forms;
