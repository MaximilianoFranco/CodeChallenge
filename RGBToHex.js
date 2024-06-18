//Javascript
function DecimalToHex(decimalNumber){
  let hex = decimalNumber.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function RgbToHex(firstDecimal, secondDecimal, thirdDecimal){
  let hexString = '#';
  hexString += DecimalToHex(firstDecimal);
  hexString += DecimalToHex(secondDecimal);
  hexString += DecimalToHex(thirdDecimal);
  return hexString;
}

function isValidRgbValue(value) {
  return Number.isInteger(value) && value >= 0 && value <= 255;
}

function convertRgbToHex(r, g, b) {
  if (isValidRgbValue(r) && isValidRgbValue(g) && isValidRgbValue(b)) {
    return RgbToHex(r, g, b);
  } else {
    return 'Invalid RGB value';
  }
}

console.log(convertRgbToHex(255, 255, 105));
console.log(convertRgbToHex(10, 20, 30));
console.log(convertRgbToHex(300, 255, 105)); // Should return 'Invalid RGB value'


/*
C#
using System;

public class Program
{
    public static void Main()
    {
        Console.WriteLine(ConvertRgbToHex(255, 255, 105));
        Console.WriteLine(ConvertRgbToHex(10, 20, 30));
        Console.WriteLine(ConvertRgbToHex(300, 255, 105)); // Should return 'Invalid RGB value'
    }

    public static string DecimalToHex(int decimalNumber)
    {
        return decimalNumber.ToString("X2");
    }

    public static string RgbToHex(int firstDecimal, int secondDecimal, int thirdDecimal)
    {
        string hexString = "#";
        hexString += DecimalToHex(firstDecimal);
        hexString += DecimalToHex(secondDecimal);
        hexString += DecimalToHex(thirdDecimal);
        return hexString;
    }

    public static bool IsValidRgbValue(int value)
    {
        return value >= 0 && value <= 255;
    }

    public static string ConvertRgbToHex(int r, int g, int b)
    {
        if (IsValidRgbValue(r) && IsValidRgbValue(g) && IsValidRgbValue(b))
        {
            return RgbToHex(r, g, b);
        }
        else
        {
            return "Invalid RGB value";
        }
    }
}

Python
def decimal_to_hex(decimal_number):
    hex_value = hex(decimal_number)[2:]  # Convert to hex and remove '0x'
    return hex_value.zfill(2)  # Ensure two digits by padding with zero if needed

def rgb_to_hex(first_decimal, second_decimal, third_decimal):
    hex_string = '#'
    hex_string += decimal_to_hex(first_decimal)
    hex_string += decimal_to_hex(second_decimal)
    hex_string += decimal_to_hex(third_decimal)
    return hex_string

def is_valid_rgb_value(value):
    return isinstance(value, int) and 0 <= value <= 255

def convert_rgb_to_hex(r, g, b):
    if is_valid_rgb_value(r) and is_valid_rgb_value(g) and is_valid_rgb_value(b):
        return rgb_to_hex(r, g, b)
    else:
        return 'Invalid RGB value'

print(convert_rgb_to_hex(255, 255, 105))
print(convert_rgb_to_hex(10, 20, 30))
print(convert_rgb_to_hex(300, 255, 105))  # Should return 'Invalid RGB value'

*/
