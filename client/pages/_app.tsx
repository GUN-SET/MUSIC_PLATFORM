import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '../dev';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<DevSupport
			ComponentPreviews={ComponentPreviews}
			useInitialHook={useInitial}
		>
			<Component {...pageProps} />
		</DevSupport>
	);
};

export default wrapper.withRedux(WrappedApp);
