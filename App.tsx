import Bugsnag from '@bugsnag/expo';
Bugsnag.start();

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, {ReactNode} from 'react'
import {ActivityIndicator} from 'react-native'
import {Colors,  Button as RNULButton} from 'react-native-ui-lib'
import {Feather} from '@expo/vector-icons'
import {ViewStyle} from 'react-native'

export type IconName = React.ComponentProps<typeof Feather>['name']

export interface IconProps {
    name: IconName;
    color?: string;
    size?: number;
    style?: ViewStyle;
    testID?: string;
}

const Icon = ({
    size = 24,
    name,
    style,
    testID,
    color = Colors.primary,
}: IconProps) => (
    <Feather size={size} color={color} name={name} style={style} testID={testID ?? `icon-${name}`} />
)


interface ButtonProps {
    onPress?: () => void;
    label?: ReactNode;
    isLoading?: boolean;
    iconName?: IconName;
    disabled?: boolean;
    link?: boolean;
}

const Button = ({
    onPress,
    label,
    isLoading,
    iconName,
    disabled,
    link,
}: ButtonProps) => {
    const icon = iconName && null
    const iconComponent = isLoading ? (
        <ActivityIndicator color={Colors.buttonIcon} testID='loading-button' />
    ) : (
        icon
    )

    return (
        <RNULButton
            disabled={disabled}
            iconComponent={iconComponent}
            animateLayout
            iconOnRight
            enableShadow
            label={!isLoading && label}
            onPress={onPress}
            buttonText
            link={link}
        />
    )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button label="test" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
