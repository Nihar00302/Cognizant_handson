-- Scenario 1
-- Process Monthly Interest

CREATE OR REPLACE PROCEDURE
ProcessMonthlyInterest

AS

BEGIN

UPDATE accounts

SET balance =
balance * 1.01

WHERE account_type =
'SAVINGS';

COMMIT;

END;
/




-- Scenario 2
-- Update Employee Bonus

CREATE OR REPLACE PROCEDURE
UpdateEmployeeBonus(

dept IN VARCHAR2,

bonus IN NUMBER

)

AS

BEGIN

UPDATE employees

SET salary =
salary +
(
salary * bonus / 100
)

WHERE department =
dept;

COMMIT;

END;
/




-- Scenario 3
-- Transfer Funds

CREATE OR REPLACE PROCEDURE
TransferFunds(

sourceAcc IN NUMBER,

targetAcc IN NUMBER,

amount IN NUMBER

)

AS

currentBalance
NUMBER;

BEGIN

SELECT balance

INTO currentBalance

FROM accounts

WHERE account_id =
sourceAcc;

IF currentBalance >= amount

THEN

UPDATE accounts

SET balance =
balance - amount

WHERE account_id =
sourceAcc;

UPDATE accounts

SET balance =
balance + amount

WHERE account_id =
targetAcc;

COMMIT;

ELSE

DBMS_OUTPUT.PUT_LINE(
'Insufficient Balance'
);

END IF;

END;
/