import React from 'react'
import { Fab } from 'native-base'
import { colors } from '../constants/style'
import { Ionicons } from "@expo/vector-icons";

export const AddTodoButton = ({onPress}) => (
  <Fab
    direction="bottomRight"
    style={{ backgroundColor: colors.blue }}
    position="absolute"
    bottom={100}
    icon={<Ionicons name="add" size={30} color={colors.white} />}
    onPress={onPress}
  />
)
