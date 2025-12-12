"use client";
import {
  Card,
  Box,
  Image,
  Stack,
  Group,
  Badge,
  Button,
  Text,
  Menu,
} from "@mantine/core";
import {
  IconStarFilled,
  IconDotsVertical,
  IconBolt,
} from "@tabler/icons-react";
import classes from "./card.module.css";

interface CourseCardProps {
  title: string;
  skillLevel: string;
  duration: string;
  cost: string;
  rating: number;
  logoSrc?: string;
  backgroundImage?: string;
  showPopularBadge?: boolean;
}

export function CourseCardNew({
  title,
  skillLevel,
  duration,
  cost,
  rating,
  showPopularBadge = true,
  logoSrc = "/vgu-logo.jpg",
  backgroundImage = "/tech-dashboard-analytics-blue-glowing-charts.jpg",
}: CourseCardProps) {
  return (
    <Card className={classes.card} padding="0" radius="lg">
      {/* Background Image */}
      <Box className={classes.imageContainer}>
        <div className={classes.menuWrapper}>
          <div className={classes.popularBadgeSection}>
            {showPopularBadge ? (
              <Badge
                leftSection={<IconBolt size={16} color="white" />}
                className={classes.popularBadge}
                variant="filled"
              >
                Best Seller
              </Badge>
            ) : null}
          </div>

          <Menu shadow="md" position="left-start">
            <Menu.Target>
              <IconDotsVertical size={32} className={classes.menuIcon} />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>View Details</Menu.Item>
              <Menu.Item>Edit Course</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        <Image
          src={backgroundImage}
          alt="Course background"
          className={classes.backgroundImage}
        />

        <div className={classes.gradientOverlay} />

        <div className={classes.logoWrapper}>
          <Image
            src={logoSrc}
            alt="Course logo"
            width={60}
            height={60}
            className={classes.logo}
          />
        </div>
      </Box>

      {/* Content */}
      <Stack gap="md" px="lg" py="md">
        <Group justify="space-between" align="center">
          <Text fw={600} size="lg" className={classes.title}>
            {title}
          </Text>
          <Badge
            leftSection={
              <IconStarFilled
                size={14}
                style={{ marginRight: 4, color: "yellow" }}
              />
            }
            variant="filled"
            color="dark"
            size="lg"
            className={classes.ratingBadge}
          >
            {rating}
          </Badge>
        </Group>

        {/* Details */}
        <Group
          justify="space-between"
          grow
          gap={0}
          className={classes.detailsGroup}
        >
          <div className={classes.detailsGrid}>
            <div className={classes.detailItem}>
              <Text fw={600} size="sm">
                {skillLevel}
              </Text>
              <Text size="xs" c="dimmed">
                Skill Level
              </Text>
            </div>

            <div className={classes.divider}></div>

            <div className={classes.detailItem}>
              <Text fw={600} size="sm">
                {duration}
              </Text>
              <Text size="xs" c="dimmed">
                Duration
              </Text>
            </div>

            <div className={classes.divider}></div>

            <div className={classes.detailItem}>
              <Text fw={600} size="sm">
                {cost}
              </Text>
              <Text size="xs" c="dimmed">
                Course Cost
              </Text>
            </div>
          </div>
        </Group>

        <Button
          fullWidth
          variant="light"
          color="gray"
          size="md"
          className={classes.knowMoreButton}
        >
          KNOW MORE
        </Button>
      </Stack>
    </Card>
  );
}
