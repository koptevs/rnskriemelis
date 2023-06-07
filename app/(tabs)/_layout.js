import {View, Text, Alert} from 'react-native';
import {Tabs, useRouter} from 'expo-router';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import {themePalette} from '../../theme';
import HeaderRight from '../../components/HeaderRight';
import LogoTitle from '../../components/LogoTitle';

export default () => {
  const navigation = useRouter();

  const tabsScreenCommonOptions = {
    tabBarActiveTintColor: themePalette.tabIconsActiveColor,
    tabBarInactiveTintColor: themePalette.tabIconsInactiveColor,
    tabBarShowLabel: false,
  };

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          ...{
            headerShown: false,
            headerTitle: 'Homme',
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          },
          ...tabsScreenCommonOptions,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          ...{
            title: 'List',
            headerStyle: {
              backgroundColor: themePalette.accentColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              //   fontWeight: 'bold',
              fontSize: 24,
              fontFamily: 'Nunito_700Bold',
            },

            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              iconName = focused ? 'planet' : 'planet-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerRight: () => <HeaderRight />,
            headerTitle: (props) => <LogoTitle {...props} />,
          },
          ...tabsScreenCommonOptions,
        }}
      />
      <Tabs.Screen
        name="check"
        options={{
          ...{
            headerShown: false,
            headerTitle: 'Check',
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          },
          ...tabsScreenCommonOptions,
        }}
      />
    </Tabs>
  );
};
