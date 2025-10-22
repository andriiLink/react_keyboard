import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [currentKey, setCurrentKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setCurrentKey(event.key);
    };

    document.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      {currentKey === null ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">{`The last pressed key is [${currentKey}]`}</p>
      )}
    </div>
  );
};
