
<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ taskStatus }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="updateStatus">Pending</el-dropdown-item>
                <el-dropdown-item @click="updateStatus">In progress</el-dropdown-item>
                <el-dropdown-item @click="updateStatus">Done</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'

export default {
    name: "dropdown",
    props: {
        taskStatus: {
            type: String,
        },
    },
    components: {
        ArrowDown
    },
    data() {
        return {
        }
    },
    methods: {
        updateStatus(e) {
            this.$emit("updateStatus", { status: e.target.innerText })
        }
    },

    created() {
    },

};
</script>
<style scoped>
.example-showcase .el-dropdown-link {
    cursor: pointer;
    font-size: 100px;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>
