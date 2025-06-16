import { Image, ImageProps } from 'tamagui';
import { useState } from 'react';

type FallbackImageProps = ImageProps & {
  fallbackSource: any;
};

export const FallbackImage = ({
  source,
  fallbackSource,
  ...props
}: FallbackImageProps) => {
  const [error, setError] = useState(false);

  return (
    <Image
      source={error ? fallbackSource : source}
      onError={() => setError(true)}
      {...props}
    />
  );
};
