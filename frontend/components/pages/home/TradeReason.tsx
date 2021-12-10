import { FC } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import WidgetCard from '@components/common/WidgetCard';
import { useTranslate } from '@app/hooks/translate';

const widgets = [
  {
    label: 'app.home.trade-reason-1-label',
    description: 'app.home.trade-reason-1-content',
    icon: '/images/widgets/robust.svg',
  },
  {
    label: 'app.home.trade-reason-2-label',
    description: 'app.home.trade-reason-2-content',
    icon: '/images/widgets/security.svg',
  },
  {
    label: 'app.home.trade-reason-3-label',
    description: 'app.home.trade-reason-3-content',
    icon: '/images/widgets/chat.svg',
  },
];

const TradeReason: FC = () => {
  const { t } = useTranslate();

  return (
    <Container sx={{ width: '100%', my: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 'medium', mb: 6 }}>
        {t('app.home.trade-reason-title')}
      </Typography>
      <Grid container spacing={2} sx={{ width: '100%', display: 'flex' }}>
        {widgets.map((widget) => (
          <Grid item xs={4} sx={{ display: 'flex' }} key={widget.label}>
            <WidgetCard
              label={t(widget.label)}
              description={t(widget.description)}
              icon={widget.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TradeReason;
