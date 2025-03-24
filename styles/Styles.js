import { StyleSheet, Dimensions } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 14,
    },
    authPage: {
        flex: 1,
    },
    authContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F3F4F6',
        borderRadius: 10,
    },
    map: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height - 20,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    headerImage: {
        height: 150,
        width: '100%',
    },
    headline: {
        textAlign: 'center',
        marginVertical: 16,
        fontSize: 24,
        color: '#9333EA',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 16,
        fontSize: 16,
        color: '#7C3AED',
    },
    listView: {
        flexDirection: 'row',
        gap: 10,
    },
    listItem: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#9CA3AF',
    },
    listItemText: {
        flex: 2,
        color: '#4B5563',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    ratingWrapper: {
        justifyContent: 'space-around',
    },
    thumbImage: {
        width: 90,
        height: 50,
        flex: 1,
        alignItems: 'flex-end',
    },
    locationView: {
        flexDirection: 'row',
        gap: 10,
    },
    popupModal: {
        height: 110,
        marginHorizontal: 35,
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#D1D5DB',
        borderRadius: 12,
    },
});

export const Theme = {
    ...MD3LightTheme,
    roundness: 8,
    colors: {
        ...MD3LightTheme.colors,
        primary: "#7C3AED",
        onPrimary: "#FFFFFF",
        primaryContainer: "#EDE9FE",
        onPrimaryContainer: "#5B21B6",
        secondary: "#4B5563",
        onSecondary: "#FFFFFF",
        secondaryContainer: "#D1D5DB",
        onSecondaryContainer: "#374151",
        background: "#F3F4F6",
        onBackground: "#111827",
        surface: "#FFFFFF",
        onSurface: "#1F2937",
        surfaceVariant: "#D1D5DB",
        onSurfaceVariant: "#4B5563",
        error: "#B91C1C",
        onError: "#FFFFFF",
        errorContainer: "#FECACA",
        onErrorContainer: "#7F1D1D",
    },
};