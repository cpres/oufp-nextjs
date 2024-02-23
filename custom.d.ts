declare namespace JSX {
  interface IntrinsicElements {
    'givebutter-widget': any; // Use `any` if the widget doesn't need specific props to be typed
    // OR more specifically, define expected properties
    // 'givebutter-widget': {
    //   id: string;
    //   [key: string]: any; // For any other props that might be dynamic or unknown
    // };
  }
}
