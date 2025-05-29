import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import FormPreview from './pages/FormPreview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-preview" element={<FormPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
