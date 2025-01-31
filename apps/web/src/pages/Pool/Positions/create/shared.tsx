import { MouseoverTooltip } from 'components/Tooltip'
import { Flex, GeneratedIcon, Text, styled } from 'ui/src'
import { InfoCircleFilled } from 'ui/src/components/icons/InfoCircleFilled'
import { iconSizes } from 'ui/src/theme'
import { useTranslation } from 'uniswap/src/i18n'

export const Container = styled(Flex, {
  gap: 32,
  p: '$spacing24',
  borderRadius: '$rounded20',
  borderWidth: '$spacing1',
  borderColor: '$surface3',
  overflow: 'hidden',
  width: '100%',
})

export function AdvancedButton({
  title,
  tooltipText,
  Icon,
  onPress,
}: {
  title: string
  tooltipText?: string
  Icon: GeneratedIcon
  onPress: () => void
}) {
  const { t } = useTranslation()
  return (
    <Flex row gap="$spacing8" alignItems="center">
      <Flex row gap="$spacing4" alignItems="center">
        <Icon size={iconSizes.icon16} color="$neutral2" />
        <Text
          variant="body3"
          color="$neutral2"
          textDecorationLine="underline"
          textDecorationStyle="dashed"
          cursor="pointer"
          onPress={onPress}
        >
          {title}
        </Text>
      </Flex>
      <Text variant="body3" color="$neutral3">
        ({t('common.advanced')})
      </Text>
      {tooltipText && (
        <MouseoverTooltip text={tooltipText} placement="auto">
          <InfoCircleFilled size={iconSizes.icon16} color="$neutral3" />
        </MouseoverTooltip>
      )}
    </Flex>
  )
}
