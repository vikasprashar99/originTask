import { useState } from 'react';
import mainLogo from './assets/icons/logo.png';
import buyHouse from './assets/icons/buy-a-house.svg';
import {
  BUTTON,
  INPUT,
  STYLEDDIVFIRST,
  STYLEDDIVSECOND,
} from './common/styledComponents';

export function OriginPage(): JSX.Element {
  const currentDate = new Date();
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(
    currentDate.getFullYear() +
      '-' +
      (Number(currentDate.getMonth()) + Number(1))
  );
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);

  // Handle the change in Amount Input
  const handleChangeAmount = (event: { target: { value: number } }) => {
    setAmount(event.target.value);
    if (date !== '') {
      processData(event.target.value, date);
    }
  };

  // Handle the change in Date input
  const handleChangeDate = (event: { target: { value: string } }) => {
    setDate(event.target.value);
    if (amount !== 0) {
      processData(amount, event.target.value);
    }
  };

  // Process Data and calculate the months and monthly amount
  const processData = (amount: number, selectedDate: string) => {
    const months = monthDiff(
      currentDate,
      Number(selectedDate.split('-')[0]),
      Number(selectedDate.split('-')[1])
    );
    setTotalMonths(months);
    setMonthlyAmount(amount / months);
  };

  // function to find month difference between two dates
  const monthDiff = (d1: Date, selectedYear: number, selectedMonth: number) => {
    let months;
    months = (selectedYear - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += selectedMonth;
    return months <= 0 ? 0 : months;
  };

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
          <img src={mainLogo} alt="logo" />
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
            height: '2em',
          }}
          className="d-flex justify-content-center mt-5"
        >
          Let&apos;s plan your &nbsp;
          <span style={{ fontWeight: 'bold' }}>saving goal.</span>{' '}
        </div>
        <div
          className="mainContainer"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#FFFFFF',
            boxShadow: '0px 16px 32px rgba(30, 42, 50, 0.08)',
            height: '75%',
            padding: '3.1%',
          }}
        >
          <div className="d-flex justify-content-start">
            <div>
              <img src={buyHouse} alt="buyHouse" />
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

          {/* Amount and Month Div */}
          <div className="item" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="d-flex flex-column col-md-7">
              <div style={{ color: '#1E2A32 ' }}>Total amount</div>
              <div>
                <INPUT
                  type="number"
                  placeholder="$"
                  onChange={handleChangeAmount}
                  value={amount}
                  name="amount"
                />
              </div>
            </div>

            <div className="d-flex flex-column col-md-4 ">
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
                  name="reachDate"
                />
              </div>
            </div>
          </div>
          {/* Amount and Month Div */}

          {/* Bottom Div */}
          <div className="d-flex flex-column">
            <STYLEDDIVFIRST>
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
            </STYLEDDIVFIRST>

            <STYLEDDIVSECOND>
              <div>
                You’re planning{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {totalMonths} monthly deposits
                </span>{' '}
                to reach your{' '}
                <span style={{ fontWeight: 'bold' }}>${amount}</span> &nbsp;goal
                by <span style={{ fontWeight: 'bold' }}>{date}.</span>
              </div>
            </STYLEDDIVSECOND>
          </div>
          {/* Bottom Div */}

          {/* Button */}
          <div className="d-flex justify-content-center mt-xs-4">
            <BUTTON>Confirm</BUTTON>
          </div>
          {/* Button */}
        </div>
      </div>
    </div>
  );
}
