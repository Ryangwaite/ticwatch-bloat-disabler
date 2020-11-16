#!/system/bin/sh

# Disable the provided package if its not already disabled
# To re-enable run a command like: pm enable $package
function disable_package() {
    local package=$1
    if [ -n "$(pm list packages --user 0 -e $package)" ]; then
        echo -n "Package '$package' is enabled, disabling it..."
        pm disable-user --user 0 $package > /dev/null
        echo "Done"
    else
        echo "Package '$package' is already disabled"
    fi
}

packages_to_disable=(
    com.mobvoi.wear.fitness.aw
    com.mobvoi.wear.social.aw
    com.mobvoi.wear.account.aw
    com.mobvoi.wear.heartrate.aw
    com.mobvoi.wear.health.aw
    com.mobvoi.companion.aw
    com.mobvoi.wear.watchface.aw
    com.mobvoi.wear.system.aw
)

# Disable packages
for package in "${packages_to_disable[@]}"; do
    disable_package $package
done