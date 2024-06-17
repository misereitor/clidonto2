import app from './app';

const port = 5050;

app.listen(port, (): void => {
  console.log(`Server is running at http://localhost:${port}`);
});
