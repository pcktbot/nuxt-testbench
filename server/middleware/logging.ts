export default defineEventHandler((event):void => {
  const time:Date = new Date();
  console.log(`[${time.toISOString()}] ${event.method} ${event.path}`);
});