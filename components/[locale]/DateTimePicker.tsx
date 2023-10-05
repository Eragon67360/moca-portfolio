"use client";

import React, { useState } from "react";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { useLocale } from "next-intl";
import fr from "date-fns/locale/fr";
import de from "date-fns/locale/de";
import enUS from "date-fns/locale/en-US";
// Import other locales as needed...

const localeMap: Record<string, Locale> = {
  fr: fr,
  de: de,
  en: enUS,
  // ... add other locales as needed
};

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // // Calculate the minimum and maximum times for the selected day
  // const minDateTime = new Date(selectedDate);
  // minDateTime.setHours(8, 0, 0, 0); // Set time to 8:00 AM

  // const maxDateTime = new Date(selectedDate);
  // maxDateTime.setHours(16, 0, 0, 0); // Set time to 4:00 PM

  let minDateTime: Date;
  let maxDateTime: Date;

  if (selectedDate instanceof Date) {
    minDateTime = new Date(selectedDate);
    minDateTime.setHours(8, 0, 0, 0); // Set time to 8:00 AM

    maxDateTime = new Date(selectedDate);
    maxDateTime.setHours(16, 0, 0, 0); // Set time to 4:00 PM
  } else {
    // Handle the scenario when selectedDate is null, e.g., set default dates:
    const defaultDate = new Date();
    minDateTime = new Date(defaultDate);
    minDateTime.setHours(8, 0, 0, 0);

    maxDateTime = new Date(defaultDate);
    maxDateTime.setHours(16, 0, 0, 0);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DF482B", // change to your desired color
      },
    },
  });

  const locale = useLocale();
  const dateFnsLocale = localeMap[locale || "en"];

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={dateFnsLocale }
        >
          <div className="flex">
            <StaticDateTimePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderLoading={() => <DayCalendarSkeleton />}
              orientation="landscape"
              disablePast={true}
              disableIgnoringDatePartForTimeValidation={true}
              minTime={minDateTime}
              maxTime={maxDateTime}
              minutesStep={30}
            />
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}

export default DateTimePicker;
