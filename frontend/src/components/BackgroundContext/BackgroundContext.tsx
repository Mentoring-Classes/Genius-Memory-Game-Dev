import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import incorrectButton from "../../sounds/incorrectButton.mp3";
import correctButton from "../../sounds/correctButton.mp3";
import { PlayAudio } from '../../utils/PlayAudio';
import { BackgroundContextProps } from './BackgroundContextTypes';
import './BackgroundContext.css';

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}

const BackgroundContext = createContext<BackgroundContextProps | undefined>(undefined);

const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [flashClass, setFlashClass] = useState<string>('');
  
  useEffect(() => {
    if (flashClass === 'flash-green') {
      PlayAudio(correctButton);
    } else if (flashClass === 'flash-red') {
      PlayAudio(incorrectButton);
    }
  }, [flashClass]); 

  return (
    <BackgroundContext.Provider value={{ flashClass, setFlashClass }}>
      <div className={`background-container ${flashClass}`}>
        {children}
      </div>
    </BackgroundContext.Provider>
  );
};

export default BackgroundProvider;

