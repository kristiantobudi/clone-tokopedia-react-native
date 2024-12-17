import {
  View,
  Text,
  Image,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router, useNavigation } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/constants/NavigationType";
import { login } from "@/utils/setting";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSession } from "../ctx";

const imageLogin = require("../../assets/images/computer-security-with-login-password-padlock.png");

type LoginFormProps = {
  email: string;
  password: string;
};

export default function Login() {
  const { signIn } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const response = await login({
        email: data.email,
        password: data.password,
      });

      if (response?.success && response?.data) {
        const { token, name } = response.data;

        await AsyncStorage.setItem("token", token);

        signIn({
          token,
          user: { name, email: data.email },
        });
        router.push("/(dashboard)/dashboard");
      } else {
        const errorMessage =
          typeof response?.message === "string"
            ? response.message
            : "Invalid credentials. Please try again.";

        Alert.alert("Login Failed", errorMessage);
      }
    } catch (error: any) {
      const errorMessage =
        typeof error?.message === "string"
          ? error.message
          : "An unexpected error occurred. Please try again.";

      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={imageLogin} style={styles.image} />
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Username is required",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your email"
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.input,
                    styles.passwordInput,
                    errors.password && styles.inputError,
                  ]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={!showPassword}
                  placeholder="Enter your password"
                />
              )}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              onPress={toggleShowPassword}
              color={"gray"}
              style={styles.eyeIcon}
            />
          </View>
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  formContainer: {
    width: "70%",
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#5F33E1",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
});
