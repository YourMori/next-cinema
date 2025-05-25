import React, { JSX } from "react";

interface Props {
  code: string;
}

export function VerificationUserTemplate({ code }: Props): JSX.Element {
  return (
    <div>
      <p>Код подтверждения:</p>
      <h2>{code}</h2>
      <p>
        <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>Подтвердить регистрацию</a>
      </p>
    </div>
  );
}
