export interface BusinessInfo {
  name: string;
  tagline: string;
  founderName: string;
  serviceArea: string;
  city: string;
  state: string;
  zip: string;
  phone: {
    display: string;
    raw: string;
    international: string;
    telLink: string;
  };
  email: string;
  whatsappUrl: string;
  facebookUrl: string;
  googleMapsQueryUrl: string;
  ratingSummary: {
    score: number;
    reviewCount: number;
    badgeText: string;
  };
  hours: {
    days: string;
    time: string;
  }[];
}

export const businessData: BusinessInfo = {
  name: "OnlySuds Mobile Detailing",
  tagline: "Showroom Shine Straight to Your Driveway",
  founderName: "Brice",
  serviceArea: "Austin, Texas & Greater Metro Communities",
  city: "Austin",
  state: "TX",
  zip: "78758",
  phone: {
    display: "(979) 451-5519",
    raw: "9794515519",
    international: "+1 (979) 451-5519",
    telLink: "tel:+19794515519"
  },
  email: "onlysudsmobiledetailing@gmail.com",
  whatsappUrl: "https://wa.me/19794515519",
  facebookUrl: "https://www.facebook.com/p/OnlySuds-Mobile-Detailing-61576875933300/",
  googleMapsQueryUrl: "https://maps.google.com/?q=OnlySuds+Mobile+Detailing+Austin+TX",
  ratingSummary: {
    score: 5.0,
    reviewCount: 12,
    badgeText: "VERIFIED 5.0 ★ MOBILE DETAILING AUSTIN"
  },
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 6:30 PM" },
    { days: "Sunday", time: "By Appointment / Mobile Dispatch" }
  ]
};

export function getMobileDispatchStatus(): { isDispatched: boolean; statusText: string; timeDetail: string } {
  try {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      timeZone: "America/Chicago",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit"
    });
    const [h, m] = timeStr.split(":").map(n => parseInt(n, 10));
    const mins = h * 60 + m;

    // 8:00 AM = 480 mins, 6:30 PM = 1110 mins
    if (mins >= 480 && mins < 1110) {
      return {
        isDispatched: true,
        statusText: "MOBILE UNITS ACTIVE IN AUSTIN",
        timeDetail: "Dispatched direct to your home or office driveway"
      };
    } else {
      return {
        isDispatched: false,
        statusText: "ACCEPTING NEXT-DAY MOBILE BOOKINGS",
        timeDetail: "Call or text (979) 451-5519 to lock your time slot"
      };
    }
  } catch {
    return {
      isDispatched: true,
      statusText: "MOBILE SERVICE DISPATCH · AUSTIN TX",
      timeDetail: "We come to you"
    };
  }
}
