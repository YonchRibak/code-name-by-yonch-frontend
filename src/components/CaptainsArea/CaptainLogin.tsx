import { useTranslation } from "react-i18next";
import iconSrc from "../../../public/codeNameIcon.png";
import ThemeToggler from "../SharedArea/ThemeToggler";
import LangToggler from "../SharedArea/LangToggler";
import { useState } from "react";
import { Button } from "../ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

function CaptainLogin(): JSX.Element {
  const [gameCode, setGameCode] = useState("");

  const { t } = useTranslation();

  return (
    <div className="grid gird-col-1 justify-center h-full w-full">
      <div className="flex justify-around w-full items-center">
        <img src={iconSrc} className="h-3/4 w-1/3 portrait:h-1/2" />
        <ThemeToggler className="" />
        <LangToggler className="text-3xl" />
      </div>

      <h1 className="text-4xl max-w-[95%]">
        {t("captain.loginScreen.enterCode")}
      </h1>

      <InputOTP
        inputMode="text"
        containerClassName="text-primary"
        maxLength={6}
        value={gameCode}
        onChange={(value) => setGameCode(value)}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      >
        <InputOTPGroup inputMode="text">
          <InputOTPSlot
            inputMode="text"
            className="border-black dark:border-white font-bold text-2xl"
            index={0}
          />
          <InputOTPSlot
            inputMode="text"
            className="border-black dark:border-white font-bold text-2xl"
            index={1}
          />
          <InputOTPSlot
            inputMode="text"
            className="border-black dark:border-white font-bold text-2xl"
            index={2}
          />
          <InputOTPSlot
            inputMode="text"
            className="border-black dark:border-white font-bold text-2xl"
            index={3}
          />
          <InputOTPSlot
            inputMode="text"
            className="border-black dark:border-white font-bold text-2xl"
            index={4}
          />
          <InputOTPSlot
            inputMode="text"
            className="border-black dark:border-white font-bold text-2xl"
            index={5}
          />
        </InputOTPGroup>
      </InputOTP>
      <a href={`captain/${gameCode}`}>
        <Button>{t("captain.loginScreen.enterGame")}</Button>
      </a>
    </div>
  );
}

export default CaptainLogin;
