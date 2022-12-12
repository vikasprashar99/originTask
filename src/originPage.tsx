import React, { useState } from 'react';
import styled from 'styled-components';
import mainLogo from './assets/icons/logo.png';
import buyHouse from './assets/icons/buy-a-house.svg';

export function OriginPage(): JSX.Element {
  const currentDate = new Date();
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const INPUT = styled.input.attrs((props) => ({
    type: props.type,
    size: props.size || '1em',
  }))`
    color: #4D6475;
    font-size: 1em;
    border: 1px solid #E9EEF2;
    border-radius: 3px;
    /* here we use the dynamically computed prop */
    padding: ${(props) => props.size};
    width:${(props) => props.width}};
    padding-right:${(props) => props.paddingRight}
  `;

  const SECONDINPUT = styled.div({
    boxSizing: 'border-box',
    minWidth: 0,
    border: '1px solid #E9EEF2',
    borderRadius: '3px',
    padding: '1.3em',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: 'none',
  });

  const OTHERINPUT = styled.div({
    boxSizing: 'border-box',
    minWidth: 0,
    border: '1px solid #E9EEF2',
    borderRadius: '3px',
    padding: '1.3em',
    display: 'flex',
    borderTop: 'none',
    background: '#F4F8FA',
  });

  const BUTTON = styled.button`
    width: 320px;
    height: 56px;
    background: #1b31a8;
    border-radius: 32px;
    color: white;
    font-size: 1em;
    font-weight: bold;
  `;

  const handleChangeAmount = (event: any) => {
    setAmount(event.target.value);
  };

  const handleChangeDate = (event: any) => {
    setDate(event.target.value);
  };

  const onClickConfirm = () => {
    const months = monthDiff(
      currentDate,
      Number(date.split('-')[0]),
      Number(date.split('-')[1])
    );
    // setAmount(amount)
    setMonthlyAmount(amount / months);

    console.log(months);
  };

  function monthDiff(d1: Date, selectedYear: number, selectedMonth: number) {
    let months;
    months = (selectedYear - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += selectedMonth;
    return months <= 0 ? 0 : months;
  }

  return (
    <div>
      <div
        style={{
          height: '80px',
          left: '0px',
          right: '0px',
          background: '#FFFFFF',
          top: '0px',
          zIndex: 9,
        }}
      >
        <div className="p-4">
          <img src={mainLogo} />
        </div>
      </div>
      <div
        style={{
          height: '90%',
          width: '100%',
          left: '0px',
          background: '#F4F8FA',
          position: 'absolute',
        }}
        className="d-flex justify-content-around"
      >
        <div
          style={{
            color: '#1B31A8',
            fontSize: '1.2em',
          }}
          className="d-flex justify-content-center mt-5"
        >
          Let&apos;s plan your &nbsp;
          <span style={{ fontWeight: 'bold' }}>saving goal.</span>{' '}
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#FFFFFF',
            boxShadow: '0px 16px 32px rgba(30, 42, 50, 0.08)',
            width: '600px',
            height: '550px',
            padding: '50px',
          }}
          className="d-flex flex-column justify-content-around"
        >
          <div className="d-flex justify-content-start">
            <div>
              <img src={buyHouse} />
            </div>
            <div
              style={{
                marginLeft: '1em',
              }}
              className="d-flex flex-column"
            >
              <div
                style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  fontSize: '2em',
                  lineHeight: '120%',
                  color: '#1E2A32',
                }}
              >
                Buy a house
              </div>
              <div style={{ lineHeight: '150%', color: '#708797' }}>
                Saving goal
              </div>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-around w-100">
              <div style={{ color: '#1E2A32 ' }}>Total amount</div>
              <div>
                <INPUT
                  placeholder="amount"
                  width="16em"
                  paddingRight="2em"
                  type="number"
                  onChange={handleChangeAmount}
                  value={amount}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#1E2A32 ' }}>Reach goal by</div>
              <div>
                <INPUT
                  placeholder="month"
                  type="month"
                  min={
                    currentDate.getFullYear() +
                    '-' +
                    (Number(currentDate.getMonth()) + Number(1))
                  }
                  onChange={handleChangeDate}
                  value={date}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-column">
            <SECONDINPUT>
              <div
                className="d-flex flex-column justify-content-center"
                style={{
                  color: '#1E2A32',
                  fontSize: '1.2em',
                }}
              >
                Monthly amount
              </div>
              <div
                style={{
                  color: '#0079FF',
                  fontSize: '1.8em',
                  fontWeight: 'bold',
                }}
                className="d-flex justify-content-center"
              >
                ${monthlyAmount.toFixed(2)}
              </div>
            </SECONDINPUT>
            <OTHERINPUT>
              You’re planning 48 monthly deposits to reach your $25,000 goal by
              October 2020.
            </OTHERINPUT>
          </div>
          <div className="d-flex justify-content-center ">
            <BUTTON onClick={onClickConfirm}>Confirm</BUTTON>
          </div>
        </div>
      </div>
    </div>
  );
}
