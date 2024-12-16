import dayjs from "dayjs";

export const formatDateTime = (date: Date, time: string): string => {
  const [timePart, modifier] = time.split(' ');
  const [hours, minutes] = timePart.split(':');
  const formattedTime = dayjs(date)
    .hour(modifier === 'PM' ? parseInt(hours) + 12 : parseInt(hours))
    .minute(parseInt(minutes));
  return formattedTime.toISOString();
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.replace('#', ''));
  if (element) {
    const headerOffset = 80; // Height of fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
